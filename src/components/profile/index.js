import { useGithub } from '../../hooks/github-hooks';
import * as S from './styled';

export function Profile() {

    const { githubState } = useGithub()
    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/40532597?v=4" alt="Eduardo Esteves" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUsername>
                        <h3>Username: </h3>
                        <a 
                            href="https://github.com/eduddz"
                            target="_blank"
                            rel="noreferrer"
                        >eduddz</a>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusContent>
                    <div>
                        <h4>Followers: </h4>
                        <span>0</span>
                    </div>
                    <div>
                        <h4>Starreds: </h4>
                        <span>40</span>
                    </div>
                    <div>
                        <h4>Followings: </h4>
                        <span>10</span>
                    </div>
                </S.WrapperStatusContent>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}