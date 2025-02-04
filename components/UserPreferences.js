import { useTheme } from '../contexts/ThemeContext';

const UserPreferences = () => {
  const { state, dispatch } = useTheme();

  const handleFontSizeChange = (e) => {
    dispatch({ type: 'SET_FONT_SIZE', payload: e.target.value });
  };

  const handleReduceAnimationsToggle = () => {
    dispatch({ type: 'TOGGLE_REDUCE_ANIMATIONS' });
  };

  return (
    <div>
      <div>
        <label>Font Size</label>
        <select
          value={state.userPreferences.fontSize}
          onChange={handleFontSizeChange}
          className="ml-2 p-1 border"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={state.userPreferences.reduceAnimations}
            onChange={handleReduceAnimationsToggle}
          />
          Reduce Animations
        </label>
      </div>
    </div>
  );
};

export default UserPreferences;
