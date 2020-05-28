type Reducer<S> = (state: S, action: any) => S;

function combineReducers<S>(reducers: ReducersMapObject): Reducer<S>;

// 修复后：

type Reducer<S> = (state: S, action: any) => S;

type ReducersMap<FullState> = {};

function combineReducers<FullState>(
  reducersMap: ReducersMap<FullState>
): Reducer<FullState>;
