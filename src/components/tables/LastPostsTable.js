import './LastPostsTable.css'; // Importe o arquivo CSS

function LastPostsTable() {
    // Suponha que você tenha uma lista de últimos posts
    const lastPosts = [
        { title: 'Post 1', author: 'Author 1', date: '2023-10-01' },
        { title: 'Post 2', author: 'Author 2', date: '2023-10-02' },
        { title: 'Post 3', author: 'Author 3', date: '2023-10-03' },
        // Adicione mais posts, se necessário
    ];

    return (
        <div className='last-posts-table'> {/* Reutilize a classe .last-users-table */}
            <h2>📄 Last Posts Added</h2> {/* Atualize o título */}
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Date</th>
                    {/* Outras colunas, se necessário */}
                </tr>
                </thead>
                <tbody>
                {lastPosts.map((post, index) => (
                    <tr key={index}>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                        <td>{post.date}</td>
                        {/* Outras colunas, se necessário */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LastPostsTable;
