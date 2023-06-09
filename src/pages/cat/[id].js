import { useRouter } from 'next/router';
import CatModal from '../../components/CatModal';
import { useEffect, useState } from 'react';

const CatPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cat, setCat] = useState(null);

  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch(`/api/${id}`);
      const data = await response.json();
      setCat(data);
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
