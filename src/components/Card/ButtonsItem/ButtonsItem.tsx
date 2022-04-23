type TypeProp = 'common' | 'thin';
type SizeProp ='s' | 'm' | 'l';

interface IContentProps {
    active?: boolean;
    type?: TypeProp;
    size?: SizeProp;
}

const validType = (type: TypeProp): string => {
    switch (type) {
        case 'common':
            return 'Обычное тесто';
        case 'thin':
            return 'Тонкое тесто';
    }
}

const validSize = (type: SizeProp): string => {
    switch (type) {
        case 's':
            return 'Маленькая';
        case 'm':
            return 'Средняя';
        case 'l':
            return 'Большая';
    }
}

export function ButtonsItem(props: IContentProps) {
    const {type, size, active = false} = props;
    const style = {background: '#4ec37f', color: '#FFFFFF'};
    
    return (
        <li style={active ? style : undefined}>
            {type ? validType(type) : null}
            {size ? validSize(size) : null}
        </li>
    );
}