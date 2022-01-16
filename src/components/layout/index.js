import * as S from './styled';

export function Layout({ children }) {
    return(
        <S.WrapperLayout>
            <header>
                Header
                {children}
            </header>
        </S.WrapperLayout>
    )
}