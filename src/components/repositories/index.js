import { RepositoryItem } from '../repository-item';
import * as S from './styled';

export function Repositories() {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                    name="repo 1" 
                    linkToRepo=""
                    fullName="eduddz/3-column-preview-card-component"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="repo 2" 
                    linkToRepo=""
                    fullName="eduddz/3-column-preview-card-component"
                />
                <RepositoryItem
                    name="repo 2" 
                    linkToRepo=""
                    fullName="eduddz/3-column-preview-card-component"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}
