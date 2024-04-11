import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PokemonDetailType, fetchPokemonDetailAPI } from '../Service/pokemonService';
import { RootState } from '.';


export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonDetail',
  async (name:string) => {
    const response = await fetchPokemonDetailAPI(name)
    return response
  }, {
    // API불필요한 호출방지 
    // 페이지를 내렸다 올렸을때 재호출 되는것을 막는다
    condition: (name, { getState }) => {
      const { pokemonDetail } = getState() as RootState
      const pokemon = pokemonDetail.pokemonDetails[name]

      return !pokemon;
    }
  }
)

interface PokemonDetailState {
  pokemonDetails: Record<string, PokemonDetailType>
}

const initialState = {
  pokemonDetails: {}
} as PokemonDetailState

const pokemonDetailSlice = createSlice({
  name: 'pokemonDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchPokemonDetail.fulfilled, (state, action: PayloadAction<PokemonDetailType>) => {
        state.pokemonDetails = {
          ...state.pokemonDetails,
          [action.payload.name]: action.payload
        }
      })
    }
})

export const pokemonDetailReducer = pokemonDetailSlice.reducer;