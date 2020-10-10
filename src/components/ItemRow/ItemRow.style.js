
export default (theme) => ({
    itemRow: {
        padding: theme.padding.default,
        margin: `${theme.margin.default} 0 `,
        border: theme.border.default,
        borderRadius: theme.borderRadius.default,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemRow__button: {
        margin: 0,
    },
})