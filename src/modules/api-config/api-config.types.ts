export interface ApiConfig {
  readonly port: number;
}

export interface AuthConfig {
  readonly jwtSecretKey: string;
  readonly jwtExpiresIn: number;
  readonly defaultStrategy: string;
}
