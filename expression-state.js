export default class ExpressionState
{
    static createDestination(expressionNode, expressionTable)
    {
        return new ExpressionState(expressionNode, expressionTable)
    }

    constructor(expressionNode, expressionTable)
    {
        this.expressionNode = expressionNode

        this.expressionTable = expressionTable
    }

    selectRule(expressionValue)
    {
        return this.expressionNode.selectRule(expressionValue ?? 0)
    }

    invertRule(expressionValue)
    {
        return this.expressionNode.invertRule(expressionValue ?? 0)
    }

    equalTo(expressionNode)
    {
        return this.expressionNode.equalTo(expressionNode)
    }

    compareTo(expressionNode)
    {
        return this.expressionNode.compareTo(expressionNode)
    }

    getDerivation(expressionRange)
    {
        return this.expressionNode.getDerivation(expressionRange)
    }

    getPartition(expressionRange)
    {
        return this.expressionNode.getPartition(expressionRange)
    }

    getTransition(expressionByte)
    {
        return this.expressionTable.at(expressionByte)
    }

    setTransition(expressionByte, expressionState)
    {
        return this.expressionTable.splice(expressionByte, 1, expressionState)
    }
}
