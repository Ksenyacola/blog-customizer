import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import React, { memo } from 'react';

export type OnClick = () => void;

export type ArrowButtonProps = {
	onClick: OnClick;
	openSideBar: boolean;
};

export const ArrowButton: React.FC<ArrowButtonProps> = memo(
	({ onClick, openSideBar }) => {
		return (
			<div
				role='button'
				aria-label={
					openSideBar
						? 'Закрыть форму параметров статьи'
						: 'Открыть форму параметров статьи'
				}
				tabIndex={0}
				className={`${styles.container} ${
					openSideBar ? styles.container_open : ''
				}`}
				onClick={onClick}>
				<img
					src={arrow}
					alt='иконка стрелочки'
					className={openSideBar ? styles.arrow_open : styles.arrow}
				/>
			</div>
		);
	}
);

ArrowButton.displayName = 'ArrowButton';
