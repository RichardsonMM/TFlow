import React from 'react';
import useState from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormControl, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import styled from 'styled-components'
import dadosIniciais from '../data/dadosIniciais';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '15px',
  p: 5, 
  
};

// Estilizando o FormControl
const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

// Estilizando o TextField
const StyledTextField = styled(TextField)`
  margin-top: 15px;
  
`;

const StyledSelect = styled(Select)`
margin-bottom: 15px;
font-size: 16px;

`;

const StyledInputLabel = styled(InputLabel)`
  /* Adicione estilos conforme necessário para o label */
`;


const ColorDot = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 8px;
  font-size: 16px;
  border: 0.5px solid gray;
`;

const cores = [
  { id: 1, nome: 'Urgente', cor: '#ff0000' },
  { id: 2, nome: 'Normal', cor: '#ffff00' },
  { id: 3, nome: 'Baixa', cor: '#0000ff' },
  // Adicione mais cores conforme necessário
];


export default function BasicModal({colId, bIndex, id, titulo, descricao, prioridade}) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const [boardData, setBoardData] = React.useState(dadosIniciais);

  
  
  const handleClose = () => {
    const item = {id: bIndex, title: titulo, description: descricao,
                  priority: prioridade}

    var idcol = parseInt(colId, 10);
    boardData[0].items.push(item);
    setBoardData({boardData});
    
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Button onClick={handleClose} sx={{ position: 'absolute', top: 15, right: 15 }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </Button>
            
        <StyledFormControl>
        <h2>Título</h2>

          <StyledTextField
            type="text"
            style={{marginBottom: '15px'}}
            color="primary"
            defaultValue={titulo}
          />
            {/* <StyledInputLabel id="select-cor-label">Prioridade</StyledInputLabel> */}
          <h4>Prioridade </h4>
          <StyledSelect
          labelId="select-cor-label"
          id="select-cor"
          defaultValue={prioridade}
          >
          {cores.map((cor, index) => (
            <MenuItem key={index} value={cor.nome}>
              <ColorDot style={{ backgroundColor: cor.cor }} />
            {cor.nome}
            </MenuItem>
          ))}
          </StyledSelect>
          <h4>Descrição </h4>

          <StyledTextField
            id="filled-multiline-static"
            multiline
            rows={6}
            defaultValue={descricao}
          />

    
        </StyledFormControl>

        </Box>
      </Modal>
    </div>
  );
};