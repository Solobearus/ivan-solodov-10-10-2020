
export default (theme) => ({
    Header: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: theme.padding.large
    },
    Header_links: {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: `0  ${theme.margin.large}  ${theme.margin.large} 0`
    }
})