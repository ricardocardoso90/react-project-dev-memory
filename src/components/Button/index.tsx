import '../Button/styles.css';

type Props = {
    label: string;
    icon?: any;
    onClickProp: React.MouseEventHandler<HTMLDivElement>;
};

export const Button = ({ label, icon, onClickProp }: Props) => {
    return (
        <div className='container-button' onClick={onClickProp}>
            {icon &&
                <div className='icon-area'>
                    <img src={icon} alt="" className='icon' />
                </div>
            }
            <div className='label-button'>{label}</div>
        </div>
    )
};