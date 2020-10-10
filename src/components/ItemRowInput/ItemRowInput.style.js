
export default (theme) => ({
    ItemRowInput: {

        padding: theme.padding.default,
        margin: `${theme.margin.default} 0 `,
        border: theme.border.default,
        borderRadius: theme.borderRadius.default,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ItemRowInput__button: {
        margin: `0 0 0 ${theme.margin.default}`,
    }
})