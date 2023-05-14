
import React, { PropsWithChildren } from 'react'
import s from './PageLayout.module.scss'
import { DP } from '../../../types';

interface PageLayoutProps extends PropsWithChildren {}

const PageLayout = ({children}: PageLayoutProps) => {
	return <div className={s.main}>{children}</div>;
};

export default PageLayout;