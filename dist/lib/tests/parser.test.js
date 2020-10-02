import { Parser } from '../parser';
describe('Parser', () => {
    describe('parseAccount', () => {
        it('should handle missing input', () => {
            const parser = new Parser();
            const result = parser.parseAccount(null);
            expect(result).toBeNull();
        });
        it('should make a raw function to return the raw input', () => {
            const parser = new Parser();
            const rawAccount = {};
            const account = parser.parseAccount(rawAccount);
            const result = account.raw();
            expect(result).toBe(rawAccount);
        });
        it('should parse buying power to a number', () => {
            const parser = new Parser();
            const rawAccount = {
                buying_power: '123.456'
            };
            const account = parser.parseAccount(rawAccount);
            expect(account.buying_power).toBe(123.456);
        });
    });
    describe('parseOrder', () => {
        it('should handle missing input', () => {
            const parser = new Parser();
            const result = parser.parseOrder(null);
            expect(result).toBeNull();
        });
        it('should make a raw function to return the raw input', () => {
            const parser = new Parser();
            const rawOrder = {};
            const account = parser.parseOrder(rawOrder);
            const result = account.raw();
            expect(result).toBe(rawOrder);
        });
        it('should parse qty to a number', () => {
            const parser = new Parser();
            const rawOrder = {
                qty: '42'
            };
            const account = parser.parseOrder(rawOrder);
            expect(account.qty).toBe(42);
        });
        it('should parse legs if they exist', () => {
            const parser = new Parser();
            const rawOrder = {
                legs: [{
                        qty: '7'
                    }]
            };
            const order = parser.parseOrder(rawOrder);
            expect(order.legs[0].qty).toBe(7);
        });
        it(`should not parse legs if they don't exist`, () => {
            const parser = new Parser();
            const rawOrder = {
                legs: null
            };
            const order = parser.parseOrder(rawOrder);
            expect(order.legs).toBeNull();
        });
    });
    describe('parseOrders', () => {
        it('should parse orders if they exist', () => {
            const parser = new Parser();
            const rawOrders = [{
                    qty: '42'
                }];
            const orders = parser.parseOrders(rawOrders);
            expect(orders[0].qty).toBe(42);
        });
        it(`should not parse orders if they don't exist`, () => {
            const parser = new Parser();
            const result = parser.parseOrders(null);
            expect(result).toBeNull();
        });
    });
    describe('parsePosition', () => {
        it('should handle missing input', () => {
            const parser = new Parser();
            const result = parser.parsePosition(null);
            expect(result).toBeNull();
        });
        it('should make a raw function that returns the raw input', () => {
            const parser = new Parser();
            const rawPosition = {};
            const position = parser.parsePosition(rawPosition);
            const result = position.raw();
            expect(result).toBe(rawPosition);
        });
        it('should parse qty to a number', () => {
            const parser = new Parser();
            const rawPosition = {
                qty: '42'
            };
            const position = parser.parsePosition(rawPosition);
            expect(position.qty).toBe(42);
        });
    });
    describe('parsePositions', () => {
        it('should parse positions if they exist', () => {
            const parser = new Parser();
            const rawPositions = null;
            const result = parser.parsePositions(rawPositions);
            expect(result).toBeNull();
        });
        it(`should not parse positions if they don't exist`, () => {
            const parser = new Parser();
            const rawPositions = [{
                    qty: '42'
                }];
            const result = parser.parsePositions(rawPositions);
            expect(result[0].qty).toBe(42);
        });
    });
    describe('parseTradeActivity', () => {
        it('should handle missing input', () => {
            const parser = new Parser();
            const result = parser.parseTradeActivity(null);
            expect(result).toBeNull();
        });
        it('should make a raw function that returns the raw input', () => {
            const parser = new Parser();
            const rawTradeActivity = {};
            const position = parser.parseTradeActivity(rawTradeActivity);
            const result = position.raw();
            expect(result).toBe(rawTradeActivity);
        });
        it('should parse qty to a number', () => {
            const parser = new Parser();
            const rawTradeActivity = {
                qty: '42'
            };
            const position = parser.parseTradeActivity(rawTradeActivity);
            expect(position.qty).toBe(42);
        });
    });
    describe('parseNonTradeActivity', () => {
        it('should handle missing input', () => {
            const parser = new Parser();
            const result = parser.parseNonTradeActivity(null);
            expect(result).toBeNull();
        });
        it('should make a raw function that returns the raw input', () => {
            const parser = new Parser();
            const rawNonTradeActivity = {};
            const position = parser.parseNonTradeActivity(rawNonTradeActivity);
            const result = position.raw();
            expect(result).toBe(rawNonTradeActivity);
        });
        it('should parse qty to a number', () => {
            const parser = new Parser();
            const rawNonTradeActivity = {
                qty: '42'
            };
            const position = parser.parseNonTradeActivity(rawNonTradeActivity);
            expect(position.qty).toBe(42);
        });
    });
    describe('parseActivities', () => {
        it('should handle missing input', () => {
            const parser = new Parser();
            const result = parser.parseActivities(null);
            expect(result).toBeNull();
        });
        it('should parse each activity type', () => {
            const parser = new Parser();
            const rawActivities = [
                {
                    activity_type: 'FILL',
                    price: '6.66'
                },
                {
                    activity_type: 'TRANS',
                    net_amount: '123.45'
                }
            ];
            const activities = parser.parseActivities(rawActivities);
            expect(activities[0].price).toBe(6.66);
            expect(activities[1].net_amount).toBe(123.45);
        });
    });
});
