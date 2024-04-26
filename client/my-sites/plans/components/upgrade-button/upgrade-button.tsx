import { Button } from '@automattic/components';
import classNames from 'classnames';
import { useTranslate } from 'i18n-calypso';
import './style.scss';

interface UpgradeButtonProps {
	goToCheckoutWithPlan: ( planSlug: string ) => void;
	isEntrepreneurTrial?: boolean;
}

const UpgradeButton = ( { goToCheckoutWithPlan, isEntrepreneurTrial }: UpgradeButtonProps ) => {
	const translate = useTranslate();
	const label = isEntrepreneurTrial
		? translate( 'Complete your plan purchase' )
		: translate( 'Upgrade now' );

	return (
		<Button
			className={ classNames( 'plans-upgrade-button__button', {
				[ 'blue' ]: isEntrepreneurTrial,
			} ) }
			primary
			onClick={ () => goToCheckoutWithPlan( 'card' ) }
		>
			{ label }
		</Button>
	);
};

export default UpgradeButton;
