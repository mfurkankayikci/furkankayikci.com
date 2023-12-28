import Section from './components/atoms/Section';
import Layout from './layout/Base';
import './styles/app.scss';

const App = () => {
	return (
		<div id="app">
			<Layout>
				<Section fluid={false}>SECTION</Section>
			</Layout>
		</div>
	);
};

export default App;
