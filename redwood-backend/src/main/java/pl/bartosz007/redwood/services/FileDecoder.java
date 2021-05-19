package pl.bartosz007.redwood.services;

import net.bytebuddy.utility.RandomString;

import javax.xml.bind.DatatypeConverter;
import java.io.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


public class FileDecoder {
    private final String fileName;
    private final String body;
    private static final String FOLDER = "..\\redwood-frontend\\public\\images\\";

    public FileDecoder(String base64String) {
        String[] strings = base64String.split(",");
        this.fileName = getCustomName(strings[0]);
        this.body = strings[1];
    }

    public void saveByte64ToFile() {

        File file = new File(FOLDER + fileName);

        byte[] data = DatatypeConverter.parseBase64Binary(body);
        try (OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file))) {
            outputStream.write(data);
            System.out.println("zapisano plik");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    private static String getCustomName(String extension) {

        StringBuilder fileNameBuffer = new StringBuilder();
        fileNameBuffer.append(new RandomString(10).nextString());
        fileNameBuffer.append("_");
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy_MM_dd");
        fileNameBuffer.append(LocalDate.now().format(formatter));

        //check image's extension
        switch (extension) {
            case "data:image/jpeg;base64" -> fileNameBuffer.append(".jpeg");
            case "data:image/png;base64" -> fileNameBuffer.append(".png");
            default -> fileNameBuffer.append(".jpg");
        }

        return fileNameBuffer.toString();
    }

    public String getFileName() {
        return fileName;
    }
}
