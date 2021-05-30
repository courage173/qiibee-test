import { Subject, EMPTY } from 'rxjs';
import { tap, filter, concatMapTo } from 'rxjs/operators';
const allActions$ = new Subject();

// This must be merged into your root epic.
export const tapAllActions = action$ =>
    action$.pipe(tap(allActions$), concatMapTo(EMPTY));

export const ofActionSuccessful = actionType =>
    allActions$.pipe(filter(({ type }) => type === actionType));
