import { ReactNode } from 'react';
import Header from '../components/molecules/Header';

interface LayoutProps {
	children: ReactNode;
}

const Layout = (props: LayoutProps) => {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
};

export default Layout;
