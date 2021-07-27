import { NgModule } from '@angular/core';
import { DragulaDirective } from './dragula.directive';
import { DragulaService } from './dragula.service';
export class DragulaModule {
    static forRoot() {
        return {
            ngModule: DragulaModule,
            providers: [DragulaService]
        };
    }
}
DragulaModule.decorators = [
    { type: NgModule, args: [{
                exports: [DragulaDirective],
                declarations: [DragulaDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3VsYS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamVucy9zcmMvbmcyLWRyYWd1bGEvc3JjLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kcmFndWxhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQsTUFBTSxPQUFPLGFBQWE7SUFDeEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQzVCLENBQUE7SUFDSCxDQUFDOzs7WUFWRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzNCLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWd1bGFEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWd1bGEuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9kcmFndWxhLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbRHJhZ3VsYURpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW0RyYWd1bGFEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFndWxhTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERyYWd1bGFNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtEcmFndWxhU2VydmljZV1cbiAgICB9XG4gIH1cbn1cbiJdfQ==