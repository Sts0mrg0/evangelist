import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { PossibleSizes } from '../../constants/sizes';

import styles from './reuse-landing-section.module.scss';

import { text, marginCenter } from '../../components/layout/align';

import { Paragraph } from '../../components/base/paragraph';
import { H1 } from '../../components/concrete/heading';
import { PrimaryButton } from '../../components/base/primary-button';
import { CtaButton } from '../../components/concrete/cta-button';
import { IconLine } from '../../components/concrete/icon-line';
import { PrimaryLink } from '../../components/concrete/primary-link';
import { Grid } from '../../components/layout/grid-component';
import { Image } from '../../components/concrete/image';
import { textColumn } from '../../components/layout/grid';

const iconsArray = [
	'logo-react',
	'logo-vue',
	'logo-angular',
	'logo-web-components',
	'logo-ts',
	'logo-js',
];

interface ReuseLandingProps extends HTMLAttributes<HTMLDivElement> {
	mainCta?: ReactNode;
}

export function ReuseLandingSection(props: ReuseLandingProps) {
	return (
		<Grid
			{...props}
			colL={2}
			className={classNames(
				styles.reuseLandingSection,
				text.center,
				text.l.left,
				props.className
			)}
			data-bit-id="sections/reuse-landing-section"
		>
			<div>
				<div>
					<H1 size={PossibleSizes.sm} className={styles.headline}>
						A better way to build
						<br />
						with modern components
					</H1>
					<Paragraph
						size={PossibleSizes.lg}
						className={classNames(styles.paragraph, textColumn, marginCenter)}
					>
						Bit helps frontend teams to build modern web applications 
						through independent and reusable components.
					</Paragraph>
				</div>

				<Paragraph
					size={PossibleSizes.sm}
					element="div"
					className={classNames(styles.buttons)}
				>
					<PrimaryLink href="https://bit.dev/signup">
						<CtaButton elevation="medium">Get Started</CtaButton>
					</PrimaryLink>
					<div className={styles.spacer} />
					<PrimaryLink external href="https://docs.bit.dev/docs/quick-start">
						<PrimaryButton elevation="medium">Learn more</PrimaryButton>
					</PrimaryLink>
				</Paragraph>
				<IconLine icons={iconsArray} className={styles.icons} />
			</div>

			<Image
				src="homepage-bit/flying-man-01.svg"
				className={marginCenter}
				alt="illustration"
				fullWidth
			/>
		</Grid>
	);
}
