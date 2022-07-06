import type {Helper} from './Helper';

export type installFn<
  T = never,
  MustNeedConfig extends boolean = false
> = MustNeedConfig extends false
  ? (helper: Helper, config?: T) => void
  : (helper: Helper, config: T) => void;

export interface Plugin<T = never, MustNeedConfig extends boolean = false> {
  install: installFn<T, MustNeedConfig>;
  name?: string;
  config?: T;
}
