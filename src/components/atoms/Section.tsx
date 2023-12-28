import { ReactNode } from 'react';

interface SectionProps {
	fluid: boolean;
	children: ReactNode;
}

const Section = (props: SectionProps) => {
	return (
		<section>
			<div className={!props.fluid ? 'container' : ''}>{props.children}</div>
		</section>
	);
};

export default Section;
