import React, { useCallback, useEffect } from 'react';

import useSearchApi from '../../hooks/useSearchApi';
import { useAppSelector } from '../../redux/hook';
import { Data } from '../../redux/search/types';
import Container from '../atoms/Container';
import Item from '../atoms/Item';
import Text from '../atoms/Text';

const ResultList: React.FC = () => {
	const { fetchSearchApi } = useSearchApi();
	const { data, limit, loading } = useAppSelector((state) => state.search);

	const fetchMore = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document?.scrollingElement?.scrollHeight
		) {
			fetchSearchApi(limit + 10);
		}
	}, [fetchSearchApi, limit]);

	useEffect(() => {
		window.addEventListener('scroll', fetchMore);

		return () => window.removeEventListener('scroll', fetchMore);
	}, [fetchMore]);

	if (!data) {
		return null;
	}

	return (
		<Container data-testid="resultlist-container" column alignItems="flex-start" padding="20px 0">
			{(data as Data[]).length > 0 ? (
				<Container flexWrap="wrap" padding="30px 50px 0">
					{(data as Data[]).map((item: Data, i: number) => (
						<Item key={i.toString()}>
							<img src={item.artworkUrl100} alt={item.artistName} />
							<Container column justifyContent="flex-start" padding="10px 0">
								<Text bold>{item.artistName}</Text>
								<Text fontSize="16px">{item.trackName}</Text>
							</Container>
						</Item>
					))}
					{loading && (
						<Container justifyContent="center" padding="40px 0">
							Load more...
						</Container>
					)}
				</Container>
			) : (
				<Container full justifyContent="center" padding="20px 0">
					There are no results.
				</Container>
			)}
		</Container>
	);
};

export default ResultList;
