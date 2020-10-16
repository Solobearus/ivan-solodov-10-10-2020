
export default (theme) => ({
    CurrencyIntervalInput: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: theme.border.default,
        borderRadius: theme.borderRadius.default,
        padding: theme.padding.default,
        width: '600px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    }
})