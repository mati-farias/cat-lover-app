import { useRouter } from 'next/router';
import api from '../../services/catApi';
import CatModal from '../../components/CatModal';
import { useEffect, useState } from 'react';

const CatPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cat, setCat] = useState(null);

  useEffect(() => {
    const fetchCat = async () => {
      const response = await api.get(`/images/${id}`);
      setCat(response.data);
    };

    if (id) {
      fetchCat();
    }
  }, [id]);

  return (
    cat && (
      <CatModal
        cat={cat}
        onRequestClose={() => router.push('/')}
      />
    )
  );
};

export default CatPage;
