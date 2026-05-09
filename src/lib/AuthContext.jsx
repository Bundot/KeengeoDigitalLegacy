// This file is no longer needed - authentication has been removed
export const useAuth = () => ({
  user: null,
  isAuthenticated: false,
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  appPublicSettings: null,
  authChecked: true,
  logout: () => {},
  navigateToLogin: () => {},
  checkUserAuth: () => {},
  checkAppState: () => {}
});

export const AuthProvider = ({ children }) => children;
