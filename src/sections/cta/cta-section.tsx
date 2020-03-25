import React from 'react';
import classNames from 'classnames';

import styles from './cta-section.module.scss';

import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '@bit/bit.base.theme.sizes';
import { Paragraph } from '@bit/bit.base.atoms.paragraph';
import { Grid } from '@bit/bit.base.layout.grid-component';
import { justifyItems, alignItems, text } from '@bit/bit.base.layout.align';
import { PrimaryLink } from '../../components/concrete/community-links/primary-link';
import { EvaButton } from '../../components/concrete/eva-button';

type CtaProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * @name CtaSection
 * @description
 * Best section yet! Encourage the user to signup with a big and responsive call to action.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function CtaSection(props: CtaProps) {
	const { ...rest } = props;

	return (
		<Grid
			{...rest}
			colSm={2}
			className={classNames(
				props.className,
				styles.ctaSection,
				justifyItems.center,
				alignItems.center,
				text.center,
				text.sm.left
			)}
			data-bit-id="bit.evangelist/sections/cta"
		>
			<div>
				<H2 size={PossibleSizes.xs}>Ready to try Bit?</H2>
				<Paragraph size={PossibleSizes.lg}>
					Empower your team to build faster together.
				</Paragraph>
			</div>
			<PrimaryLink href="https://bit.dev/signup">
				<EvaButton importance="cta">Start for free</EvaButton>
			</PrimaryLink>
		</Grid>
	);
}
