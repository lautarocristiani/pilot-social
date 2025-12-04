import { useState } from 'react';
import { ListItem, ListItemAvatar, Avatar, Typography, Paper, Chip, Box, IconButton, TextField, Stack } from '@mui/material';
import { Person, Star, Edit, Delete, Check, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import type { Comment } from '../types/comment.types';
import { useCommentsStore } from '../../../store/comments.store';

interface CommentItemProps {
  comment: Comment;
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  const isNew = comment.id > 10000;
  const { removeComment, updateComment } = useCommentsStore();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.body);
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (editText.trim().length < 10) {
      setError(true);
      return;
    }
    updateComment(comment.postId, comment.id, editText);
    setIsEditing(false);
    setError(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(comment.body);
    setError(false);
  };

  const handleDelete = () => {
    removeComment(comment.postId, comment.id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
    if (e.target.value.length >= 10) setError(false);
  };

  return (
    <ListItem 
      alignItems="flex-start" 
      sx={{ p: 0, mb: 2 }}
      component={motion.li}
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, type: "spring" }}
      layout 
    >
      <Paper 
        elevation={isNew ? 3 : 0} 
        variant={isNew ? "elevation" : "outlined"}
        sx={{ 
          p: 2, 
          width: '100%', 
          display: 'flex', 
          gap: 2, 
          bgcolor: isNew ? 'action.hover' : 'background.paper',
          borderColor: isNew ? 'primary.main' : 'divider',
          borderWidth: isNew ? 1 : 1,
          borderStyle: 'solid',
          position: 'relative'
        }}
      >
        <ListItemAvatar sx={{ mt: 0 }}>
          <Avatar sx={{ bgcolor: isNew ? 'primary.main' : 'grey.400' }}>
            {isNew ? <Star fontSize="small" /> : <Person />}
          </Avatar>
        </ListItemAvatar>
        
        <Box flexGrow={1}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
            <Typography variant="subtitle2" fontWeight="bold" component="span">
              {comment.email}
            </Typography>
            
            <Box display="flex" alignItems="center" gap={1}>
              {isNew && !isEditing && (
                <>
                  <Chip label="NUEVO" size="small" color="primary" variant="filled" sx={{ height: 20, fontSize: '0.65rem', fontWeight: 'bold' }} />
                  <Box>
                    <IconButton size="small" onClick={() => setIsEditing(true)} color="default">
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={handleDelete} color="error">
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                </>
              )}
            </Box>
          </Box>
          
          <Typography variant="caption" display="block" color="text.secondary" gutterBottom>
            {comment.name}
          </Typography>

          {isEditing ? (
            <Stack direction="row" spacing={1} alignItems="flex-start" mt={1}>
              <TextField 
                fullWidth 
                size="small" 
                multiline 
                value={editText} 
                onChange={handleChange}
                error={error}
                helperText={error ? "Mínimo 10 caracteres" : ""}
                autoFocus
              />
              <IconButton size="small" onClick={handleSave} color="success" sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
                <Check fontSize="small" />
              </IconButton>
              <IconButton size="small" onClick={handleCancel} color="default" sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
                <Close fontSize="small" />
              </IconButton>
            </Stack>
          ) : (
            <Typography variant="body2" color="text.primary" sx={{ whiteSpace: 'pre-wrap' }}>
              {comment.body}
            </Typography>
          )}
        </Box>
      </Paper>
    </ListItem>
  );
};