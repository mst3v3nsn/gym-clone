import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { BASE_URL, YOUTUBE_SEARCH_URL } from '../utils';

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDetailData = await fetchData(`${BASE_URL}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData);
            const exerciseVideosData = await fetchData(`${YOUTUBE_SEARCH_URL}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideosData.contents);
            const targetMuscleExercisesData = await fetchData(`${BASE_URL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);
            const equipmentExercisesData = await fetchData(`${BASE_URL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentExercisesData);
        }

        fetchExercisesData();
    }, [id])

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetails;