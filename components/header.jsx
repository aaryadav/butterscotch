import { styled } from '../stitches.config';
import { Box } from '../components/box';

const StyledHeader = styled(Box, {
    position: 'fixed',
    justifyContent: 'space-between',
    width: '100%',
    height: '80px',
    backgroundColor: '#fff',
    zIndex: '10',
    variants: {
        theme: {
            corp: {
                padding: '0px 40px',
                borderBottom: '1px solid $slate5',
            },
            chill: {

            },
        },
    },
    defaultVariants: {
        theme: 'corp',
    }
});

const HeaderItem = styled(Box, {
    variants: {
        theme: {
            corp: {
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '',
                '&:hover': {
                    cursor: 'pointer',
                    // backgroundColor: '$slate5',
                }
            },
            chill: {
                padding: '15px',
                borderRadius: '10px',
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

const Header = ({ items, theme }) => {
    return (
        <StyledHeader theme={theme} css={{ '& > *:first-child': { fontWeight: 'bold' } }}>
            {items.map((item) => (
                <HeaderItem theme={theme} key={item.id}>
                    {item.title}
                </HeaderItem>
            ))}
        </StyledHeader>
    );
}


export default Header;