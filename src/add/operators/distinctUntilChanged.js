import proto, {baseNext} from '../../core/proto'
import {baseCreate} from '../../core'

proto.distinctUntilChanged = function distinctUntilChanged() {
  let lastValue
  return baseCreate({
    next: function(x) {
      if (x !== lastValue) {
        baseNext(this, x)
        lastValue = x
      }
    }
  }, this, 'distinctUntilChanged')
}
