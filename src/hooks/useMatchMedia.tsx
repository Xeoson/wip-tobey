import {
  createContext,
  PropsWithChildren,
  useContext,
  useSyncExternalStore,
} from "react";

type IMedia =
  | `(${string}:${string})`
  | `(${string}:${string}) and (${string}:${string})`;

export const createMatchMedia = (media: IMedia) => {
  const get = () => window.matchMedia(media).matches;

  const subscribe = (callback: () => void) => {
    const m = window.matchMedia(media);
    m.addEventListener("change", callback);
    return () => m.removeEventListener("change", callback);
  };

  const useMatchMediaListener = () =>
    useSyncExternalStore(subscribe, get, () => false);

  const MediaContext = createContext<boolean>(false);

  const MatchMediaProvider = ({ children }: PropsWithChildren) => {
    const isMatch = useMatchMediaListener();

    return (
      <MediaContext.Provider value={isMatch}>{children}</MediaContext.Provider>
    );
  };

  const useMatch = () => useContext(MediaContext);

  return [MatchMediaProvider, useMatch, useMatchMediaListener] as [
    typeof MatchMediaProvider,
    typeof useMatch,
    typeof useMatchMediaListener
  ];
};
