import './LastCommentsTable.css'; // Importe o arquivo CSS

function LastCommentsTable() {
    // Suponha que você tenha uma lista de últimos comentários
    const lastComments = [
        { user: 'Usuário 1', comment: 'Comentário 1' },
        { user: 'Usuário 2', comment: 'Comentário 2' },
        { user: 'Usuário 3', comment: 'Comentário 3' },
        // Adicione mais comentários, se necessário
    ];

    return (
        <div className='last-comments-table'>
            <h2>💬 Last Comments Added</h2>
            <table>
                <thead>
                <tr>
                    <th>Usuário</th>
                    <th>Comentário</th>
                    {/* Outras colunas, se necessário */}
                </tr>
                </thead>
                <tbody>
                {lastComments.map((comment, index) => (
                    <tr key={index}>
                        <td>{comment.user}</td>
                        <td>{comment.comment}</td>
                        {/* Outras colunas, se necessário */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LastCommentsTable;
