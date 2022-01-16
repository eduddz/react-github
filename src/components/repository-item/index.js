import * as S from './styled';

export function RepositoryItem({ name, linkToRepo, fullName }) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>fullName: </h4>
            <a href={linkToRepo}>
                {fullName}
            </a>
        </div>
    )
}