import React, { useState } from 'react';
import './UsersTable.css';

function PostsTable() {
    const postsData = [
        {
            "id": 75716,
            "user_id": 5354499,
            "title": "Et comminor cupressus earum cometes.",
            "post": "Cunae curso distinctio. Qui infit illo. Adaugeo deorsum sophismata. Turpe omnis cunctatio. Adsum alter tabernus. Ambulo supra cohors. Deinde ter cernuus. Ab arbitro decerno. Coepi ceno ipsa. Sustineo curia corroboro. Repellat taceo aperio. Nobis vapulus vulgaris. Defetiscor denuo totam. Caute cauda est. Conventus tergum cuius."
        },
        {
            "id": 75715,
            "user_id": 5354496,
            "title": "Degero acidus validus ambulo amor correptius autem adinventitias delego.",
            "post": "Veritatis torrens totam. Villa vivo deleniti. Comitatus terga copia. Patrocinor admoveo alienus. Taceo vitae quia. Universe damnatio aut. Vilis vita tamisium. Beatus claustrum occaecati. Abscido depulso sophismata. Usque tum curto. Ullam thalassinus videlicet. Statua sulum quia."
        },
        {
            "id": 75714,
            "user_id": 5354496,
            "title": "Thorax quisquam summisse condico tersus triumphus civis viduata utpote.",
            "post": "Theca adultus charisma. Vaco aut templum. Arbitro commodi subiungo. Vulgaris denuo utpote. Suffragium texo conturbo. Decretum angustus utor. Cupio consequatur tibi. Commodo ventosus adficio. Adnuo qui aggredior. Assumenda armarium chirographum. Apud curvo vulnus. Tamquam vesica placeat. Aut conscendo conatus. Vitae nihil ea. Decerno audax itaque."
        },
        {
            "id": 75713,
            "user_id": 5354493,
            "title": "Dolores tametsi creptio vitiosus absens chirographum claustrum.",
            "post": "Ex traho est. Callide tamisium vulnero. Certus aranea benevolentia. Acquiro tyrannus quis. Vespillo apud vito. Ascisco vestrum vere. Debeo sono sodalitas. Amor clementia capto. Trado tripudio assumenda. Deinde argentum volutabrum. Sint conspergo commemoro. Rerum canis venio. Nemo aptus careo. Voluntarius surculus caste. Consequatur verbum quis. Causa abundans clamo. Aequitas vitae advoco. Aut cinis amicitia."
        },
        {
            "id": 75711,
            "user_id": 5354490,
            "title": "Pecus tunc thymum dens ex comes aureus coniecto.",
            "post": "Crebro aduro est. Adfero vel casso. Audeo omnis enim. Iusto venia viduata. Administratio non abundans. Deduco assumenda somnus. Vulgo ipsam amitto. Sponte utrimque vergo. Arbor vergo ars. Consequatur uter dicta. Alo charisma calcar."
        },
        {
            "id": 75710,
            "user_id": 5354490,
            "title": "Quam varius corrigo conturbo spiritus voveo.",
            "post": "Varius congregatio est. Consequatur sopor vester. Approbo saepe canis. Suadeo utpote amplexus. Cum porro defero. Pecto delinquo numquam. Cohaero arma viduata. Demoror ante delinquo. Argentum vulariter supplanto. Cattus ago aedificium. Vero tepidus aequus. Patior optio aut. Sollers vomica arx. Clam vulariter adnuo."
        },
        {
            "id": 75709,
            "user_id": 5354487,
            "title": "Vulnero vos crepusculum crapula civis.",
            "post": "Suspendo bos confugo. Delibero dedico appositus. Solio aeneus cohaero. Vindico tibi trepide. Antepono auctus terminatio. Non sunt vomica. Officiis cena sint. Dedico sto atrocitas. Ventus allatus est. Certe demum territo. Vito aduro pel. Aegre tenax ubi. Sordeo depromo video."
        },
        {
            "id": 75708,
            "user_id": 5354487,
            "title": "Ipsum celer cruciamentum curso stabilis claro.",
            "post": "Hic stella cursus. Taceo modi tametsi. Depulso volutabrum centum. Armarium quo auxilium. Una doloremque alienus. Tabula cresco desolo. Blanditiis desino carus. Aegrus cubo vicinus. Totam confero ocer. Theologus ascisco talus. Cibus arx distinctio. Et turpis degenero. Angulus decerno speculum. Dolores arbor adipiscor. Omnis tripudio caput."
        },
        {
            "id": 75707,
            "user_id": 5354486,
            "title": "Possimus comminor textus varietas titulus spectaculum.",
            "post": "Ustilo deinde ut. Tempora acer adopto. Supellex amet totidem. Temporibus arca spes. Arbustum defessus bestia. Amplus dolorem vito. Dolorem curvo adversus. Depulso depromo confugo. Patior iste claustrum. Canis custodia dolores. Desipio cuius supplanto. Vel una ater. Subiungo sordeo adulatio. Commodo dolor consuasor. Depono spiritus ulciscor."
        },
        {
            "id": 75706,
            "user_id": 5354485,
            "title": "Dolorum vae eum reprehenderit carpo ustilo volva.",
            "post": "Attero vero cubitum. Fugiat ara claro. Cinis arma est. Tamisium accedo aiunt. Nisi qui cum. Alo vito arbustum. Video nam similique. Itaque tantillus placeat. Tenetur capitulus quia. Despecto civis solvo. Clam vulariter patior."
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusFilter = (event) => {
        setSelectedStatus(event.target.value);
    };

    const filteredPosts = postsData.filter((post) => {
        // Filtrar com base no termo de pesquisa
        const matchesSearchTerm = post.id.toString().includes(searchTerm);

        // Filtrar com base no status selecionado
        if (selectedStatus === 'all') {
            return matchesSearchTerm;
        } else {
            return matchesSearchTerm && post.status === selectedStatus;
        }
    });

    return (
        <div className='post-table'>
            <input
                type='text'
                placeholder='Search post by ID'
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>USER ID</th>
                        <th>TITLE</th>
                        <th>POST</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredPosts.map((post, index) => (
                        <tr key={index}>
                            <td>{post.id}</td>
                            <td>{post.user_id}</td>
                            <td>{post.title}</td>
                            <td>{post.post}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PostsTable;
