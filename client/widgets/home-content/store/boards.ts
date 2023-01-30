import { defineStore } from 'pinia';
interface ICard {
	subtitle: string;
	text: string;
}

interface IDesk {
	id: string;
	deskName: string;
	cards: ICard[];
}

interface IBoard {
	id: string;
	boardName: string;
	desks: IDesk[];
}

const useBoardsStore = defineStore('boards', {
	state: () => ({
		boards: [
			{
				id: 'uuid-23213123-xxxx',
				boardName: 'Platform Launch',
				desks: [
					{
						id: 'uuid-213123123-zzzz',
						deskName: 'todo',
						cards: [
							{
								subtitle: 'Built UI for onboarding flow',
								text: '0 of 3 substasks',
							},
							{
								subtitle: 'Built UI for search',
								text: '0 of 1 substasks',
							},
							{
								subtitle: 'Built settings UI',
								text: '0 of 2 substasks',
							},
							{
								subtitle: 'QA and test all major user journeys',
								text: '0 of 2 substasks',
							},
						],
					},
					{
						id: 'uuid-213123123-yyyy',
						deskName: 'doing',
						cards: [
							{
								subtitle: 'Design settings and search pages',
								text: '1 of 3 substasks',
							},
							{
								subtitle: 'Add account management endpoints',
								text: '2 of 3 substasks',
							},
							{
								subtitle: 'Design onboarding flow',
								text: '1 of 3 substasks',
							},
							{
								subtitle: 'Add search endpoints',
								text: '1 of 2 substasks',
							},
							{
								subtitle: 'Add authentication endpoints',
								text: '1 of 2 substasks',
							},
							{
								subtitle: 'Research pricing',
								text: '1 of 3 substasks',
							},
							{
								subtitle: 'Design settings and search pages',
								text: '1 of 3 substasks',
							},
							{
								subtitle: 'Add account management endpoints',
								text: '2 of 3 substasks',
							},
							{
								subtitle: 'Design onboarding flow',
								text: '1 of 3 substasks',
							},
							{
								subtitle: 'Add search endpoints',
								text: '1 of 2 substasks',
							},
							{
								subtitle: 'Add authentication endpoints',
								text: '1 of 2 substasks',
							},
							{
								subtitle: 'Research pricing',
								text: '1 of 3 substasks',
							},
						],
					},
					{
						id: 'uuid-213123123-zzzz',
						deskName: 'done',
						cards: [
							{
								subtitle: 'Conduct 5 wireframe tests',
								text: '1 of 3 substasks',
							},
							{
								subtitle: 'Create wireframe prototype',
								text: '1 of 1 substasks',
							},
						],
					},
				],
			},
		] as IBoard[],
	}),
	getters: {
		getBoardByName: (state) => (boardName: string) =>
			state.boards.find(
				(board) => board.boardName === boardName
			) as IBoard,
	},
	actions: {
		// async loadMoreBlogs(amountBlogs: number, category: string) {},
	},
});

export { useBoardsStore };
