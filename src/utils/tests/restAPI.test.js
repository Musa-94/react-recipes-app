import * as api from '../restAPI';

describe('restAPI', () => {
    describe('sendGetRequestById', () => {
        beforeEach(() => {
            fetchMock.resetMocks();
        });

        it('should correct recipe', async () => {
            const expected = { recipe: { ingredients: [], publisher: '' } };
            fetchMock.mockResponseOnce(JSON.stringify(expected));

            const actual = await api.sendGetRequestById(123);

            expect(actual).toEqual(expected);
            expect(fetchMock).toHaveBeenCalledTimes(1);
        });
    });

    describe('sendGetRequestByRecipe', () => {
        beforeEach(() => {
            fetchMock.resetMocks();
        });

        it('should correct recipe', async () => {
            const expected = {
                count: 1,
                recipes: [
                    {
                        title: 'title',
                        publisher: 'publisher',
                    }
                ]
            };
            fetchMock.mockResponseOnce(JSON.stringify(expected));

            const actual = await api.sendGetRequestByRecipe('onion');

            expect(actual).toEqual(expected);
            expect(fetchMock).toHaveBeenCalledTimes(1);
        });
    })
});