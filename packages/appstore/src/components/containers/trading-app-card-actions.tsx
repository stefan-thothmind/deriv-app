import { Button } from '@deriv/components';
import { localize } from '@deriv/translations';
import TradeButton from 'Components/trade-button/trade-button';
import React from 'react';
import { observer } from 'mobx-react-lite';
import MultiActionButtonGroup from 'Components/multi-action-button-group';

export type Actions = {
    action_type: 'get' | 'none' | 'trade' | 'dxtrade' | 'multi-action'; // multi-action can be tranfer_trade or top_up_trade
    clickable_icon?: boolean;
    link_to?: string;
    has_divider?: boolean;
    onAction?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    is_external?: boolean;
    is_buttons_disabled?: boolean;
    is_real?: boolean;
};

const TradingAppCardActions = ({
    action_type,
    link_to,
    onAction,
    is_external,
    is_buttons_disabled,
    is_real,
}: Actions) => {
    switch (action_type) {
        case 'get':
            return (
                <Button primary_light onClick={() => onAction?.()}>
                    {localize('Get')}
                </Button>
            );
        case 'trade':
            return <TradeButton link_to={link_to} onAction={onAction} is_external={is_external} />;
        case 'dxtrade':
            return <TradeButton link_to={link_to} />;
        case 'multi-action':
            return (
                <MultiActionButtonGroup
                    link_to={link_to}
                    onAction={onAction}
                    is_buttons_disabled={is_buttons_disabled}
                    is_real={is_real}
                />
            );
        case 'none':
        default:
            return null;
    }
};

export default observer(TradingAppCardActions);
