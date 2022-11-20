import '../Button/styles.css';

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const Button = ({ label, icon, onClick }: Props) => {
    return (
        <div className='container-button' onClick={onClick}>
            {icon &&
                <div className='icon-area'>
                    <img src={icon} alt="" className='icon' />
                </div>
            }
            <div className='label-button'>{label}</div>
        </div>
    )
};