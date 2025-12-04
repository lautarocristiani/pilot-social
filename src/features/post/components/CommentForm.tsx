import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useCommentsStore } from '../../../store/comments.store';

const commentSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  body: z.string().min(10, 'El comentario debe tener al menos 10 caracteres'),
});

type CommentFormValues = z.infer<typeof commentSchema>;

interface CommentFormProps {
  postId: number;
}

export const CommentForm = ({ postId }: CommentFormProps) => {
  const { addComment } = useCommentsStore();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = (data: CommentFormValues) => {
    const newComment = {
      postId,
      id: Date.now(),
      ...data,
    };
    
    addComment(postId, newComment);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Deja un comentario
      </Typography>
      
      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={2}>
          <TextField
            fullWidth
            label="Nombre"
            size="small"
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register('name')}
          />
          <TextField
            fullWidth
            label="Email"
            size="small"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
        </Box>
        
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Tu comentario"
          error={!!errors.body}
          helperText={errors.body?.message}
          {...register('body')}
        />

        <Box display="flex" justifyContent="flex-end">
          <Button 
            type="submit" 
            variant="contained" 
            endIcon={<Send />}
            disabled={isSubmitting}
          >
            Enviar Comentario
          </Button>
        </Box>
      </Box>
    </Box>
  );
};