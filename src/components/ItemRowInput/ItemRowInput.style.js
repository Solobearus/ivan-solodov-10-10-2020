
export default (theme) => ({
    ItemRowInput: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap',
        },
    },
    ItemRowInput__Input: {
        margin: `0`,
        width: '20%',
        minWidth: '150px',
        [theme.breakpoints.down('md')]: {
            width: '48%',
            marginBottom: theme.margin.default,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    }
})