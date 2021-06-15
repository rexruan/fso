setMsgText([`Infomation of ${name} has already been removed from server`, error]);
      setTimeout(() => {
        setMsgText(['', nomsg])
      }, 5000)
     }