import { styled } from '../stitches.config';
import { Box } from '../components/box';

const StyledContent = styled(Box, {
    position: 'absolute',
    display: 'flex',
    margin: '80px 120px',
    padding: '50px 200px',
    flexDirection: 'column',
    width: '96%',
    height: '100vh',
    overflow: 'none',
    zIndex: '0',
});

const Content = ({ children }) => {
    return (
        <StyledContent>
            {children}
        </StyledContent>
    );
}

export default Content;