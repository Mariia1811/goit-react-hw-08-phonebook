import { Container } from '@mui/material';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footerfooter, LinkFooter, TextFooter } from './Loyyout.styled';

const Layout = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footerfooter>
          <TextFooter>
            {' '}
            © 2023 | All Rights Reserved | Developed with 💛{' '}
            <LinkFooter href="https://github.com/Mariia1811">
              Mariia Kryzhalko
            </LinkFooter>
          </TextFooter>
        </Footerfooter>
      </Container>
    </div>
  );
};

export default Layout;
