
export default (theme) => ({
    ItemsListRowItem: {},
    ItemsListRowItem__price: {
        display: 'flex',
    },
    ItemsListRowItem__data: {
        width: '20%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        }
    },

})