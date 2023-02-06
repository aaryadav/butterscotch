import { styled } from '../stitches.config';

import { Box } from '../components/box';


const StyledSidebar = styled(Box, {
    display: 'flex',
    paddingTop: '80px',
    position: 'fixed',
    flexDirection: 'column',
    width: '250px',
    height: '100%',
    overflow: 'auto',
    overscrollBehavior: 'contain',
    zIndex: '1',
    variants: {
        theme: {
            corp: {
                borderRight: '1px solid $slate5',
            },
            chill: {
                padding: '15px',
            },
        },
    },
    defaultVariants: {
        theme: 'corp',
    }
});

const NavItem = styled(Box, {
    variants: {
        theme: {
            corp: {
                padding: '10px',
                paddingLeft: '40px',
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '$slate5',
                }
            },
            chill: {
                padding: '15px',
                paddingLeft: '25px',
                borderRadius: '10px',
                marginBottom: '5px',
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '$violet5',
                }
            },
        },
    },
    defaultVariants: {
        theme: 'corp',
    }
})

const Sidebar = ({ items, bItems, theme }) => {
    return (
        <StyledSidebar theme={theme} css={{ '& > *:first-child': { marginTop: '25px' }, justifyContent: 'space-between' }}>
            <Box css={{ flexDirection: 'column' }}>
                {items.map((item) => (
                    <NavItem theme={theme} key={item.id}>
                        {item.title}
                    </NavItem>
                ))}
            </Box>
            {/* <Box>
                {bItems.map((item) => (
                    <NavItem theme={theme} key={item.id} css={{ color:'$slate10', cursor: 'pointer' }}>
                        <span>{item.title} <a href={item.src}>{item.link}</a></span>
                    </NavItem>
                ))}
            </Box> */}
        </StyledSidebar>
    );
}


export default Sidebar;